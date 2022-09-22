const apiKey = "586777631484524";
export const cloudName = "dz1rusun7";

export const uploadImageToCloud = async (image) => {
  const signatureResponse = await fetch("/api/signature", {
    method: "GET",
  });

  const signatureData = await signatureResponse.json();

  const imageFormData = new FormData();
  imageFormData.append("file", image);
  imageFormData.append("api_key", apiKey);
  imageFormData.append("signature", signatureData.signature);
  imageFormData.append("timestamp", signatureData.timestamp);

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body: imageFormData,
    }
  );
  const cloudinaryData = await cloudinaryResponse.json();

  const imageData = {
    public_id: cloudinaryData.public_id,
    version: cloudinaryData.version,
    signature: cloudinaryData.signature,
  };

  return imageData;
};
