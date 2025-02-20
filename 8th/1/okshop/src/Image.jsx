import { useState } from 'react';

const UserPicture = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Upload Your Picture</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <h2>Preview:</h2>
          <img src={imageSrc} alt="User's Upload" style={{ maxWidth: '100%', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default UserPicture;
