import os
import tkinter as tk
from tkinter import filedialog, ttk
from PIL import Image, ImageTk

class MangaReader(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Manga Reader")
        self.geometry("800x600")
        self.current_chapter = tk.IntVar()
        self.current_page = tk.IntVar()
        self.current_chapter.set(1)
        self.current_page.set(1)
        self.image_frame = tk.Frame(self)
        self.image_frame.pack(fill="both", expand=True)
        self.canvas = tk.Canvas(self.image_frame, bg="black")
        self.canvas.pack(side="left", fill="both", expand=True)
        self.scrollbar = ttk.Scrollbar(self.image_frame, orient="vertical", command=self.canvas.yview)
        self.scrollbar.pack(side="right", fill="y")
        self.canvas.configure(yscrollcommand=self.scrollbar.set)
        self.canvas.bind("<Configure>", self.resize_image)
        self.bind("<KeyPress>", self.on_key_press)
        self.create_controls()
        self.load_manga_directory()

    def create_controls(self):
        chapter_label = ttk.Label(self, text="Chapter:")
        chapter_label.pack(side="left")
        self.chapter_dropdown = ttk.Combobox(self, textvariable=self.current_chapter)
        self.chapter_dropdown.pack(side="left")
        self.chapter_dropdown.bind("<<ComboboxSelected>>", self.update_page_range)

        page_label = ttk.Label(self, text="Page:")
        page_label.pack(side="left")
        self.page_spinbox = ttk.Spinbox(self, from_=1, to=1, textvariable=self.current_page, width=5)
        self.page_spinbox.pack(side="left")

        previous_button = ttk.Button(self, text="Previous", command=self.previous_page)
        previous_button.pack(side="left")

        next_button = ttk.Button(self, text="Next", command=self.next_page)
        next_button.pack(side="left")

    def load_manga_directory(self):
        self.manga_directory = filedialog.askdirectory(title="Select Manga Directory")
        if not self.manga_directory:
            self.destroy()
            return
        self.chapters = sorted([f for f in os.listdir(self.manga_directory) if os.path.isdir(os.path.join(self.manga_directory, f))])
        self.chapter_dropdown['values'] = self.chapters
        self.show_image()

    def show_image(self):
        chapter_path = os.path.join(self.manga_directory, self.chapters[self.current_chapter.get() - 1])
        images = sorted([f for f in os.listdir(chapter_path) if f.endswith((".jpg", ".png", ".webp"))])
        if self.current_page.get() < 1:
            self.current_page.set(1)
        elif self.current_page.get() > len(images):
            self.current_page.set(len(images))
        image_path = os.path.join(chapter_path, images[self.current_page.get() - 1])
        self.image = Image.open(image_path)
        self.show_resized_image()

    def show_resized_image(self):
        width = self.canvas.winfo_width()
        if width > 0:
            aspect_ratio = width / self.image.width
            height = int(self.image.height * aspect_ratio)
            self.resized_image = self.image.resize((width, height))
            self.canvas.delete("all")
            self.image_on_canvas = ImageTk.PhotoImage(self.resized_image)
            self.canvas.create_image(0, 0, anchor="nw", image=self.image_on_canvas)
            self.canvas.config(scrollregion=self.canvas.bbox("all"))

    def resize_image(self, event):
        if hasattr(self, 'image'):
            self.show_resized_image()

    def on_key_press(self, event):
        if event.keysym == "Right":
            self.next_page()
        elif event.keysym == "Left":
            self.previous_page()
        elif event.keysym == "Escape":
            self.destroy()

    def update_page_range(self, event):
        selected_chapter = self.chapter_dropdown.current()
        if selected_chapter != -1:
            self.current_chapter.set(selected_chapter + 1)
            self.show_image()
            chapter_path = os.path.join(self.manga_directory, self.chapters[selected_chapter])
            images = sorted([f for f in os.listdir(chapter_path) if f.endswith((".jpg", ".png", ".webp"))])
            self.page_spinbox.config(from_=1, to=len(images))
            self.current_page.set(1)  # Reset page to 1 when changing chapter

    def next_page(self):
        self.current_page.set(self.current_page.get() + 1)
        self.show_image()

    def previous_page(self):
        self.current_page.set(self.current_page.get() - 1)
        self.show_image()

if __name__ == "__main__":
    app = MangaReader()
    app.mainloop()
