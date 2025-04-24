import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const HeaderRestaurents = () => {
<<<<<<< Updated upstream
  return <div>Restaurents</div>;
=======
  const sigCanvas = useRef(null);
  const [isSigned, setIsSigned] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleClear = () => {
    sigCanvas.current.clear();
    setIsSigned(false);
    setImageUrl(null);
  };

  const handleEnd = () => {
    // Only set isSigned true when canvas has content
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      setIsSigned(true);
    }
  };

  const handleSave = () => {
    if (isSigned && sigCanvas.current) {
      const imageData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      setImageUrl(imageData);
      console.log('Signature Image URL:', imageData);

      // Dummy API post request
      // Example for real-world use: send base64 or convert to blob for multipart/form-data
      // fetch('https://dummyapi.io/signature', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ signature: imageData }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log('API Response:', data))
      //   .catch((err) => console.error('API Error:', err));
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Signature Canvas Box */}
      <div className="relative h-64 w-96 bg-white flex items-center justify-center border-2 border-black">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          minWidth={2}
          maxWidth={4}
          canvasProps={{
            width: 380,
            height: 250,
            className: 'sigCanvas bg-white',
          }}
          onEnd={handleEnd}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all font-medium border border-gray-400 shadow-sm"
        >
          Clear Signature
        </button>

        <button
          onClick={handleSave}
          disabled={!isSigned}
          className={`px-6 py-2 rounded-lg transition-all font-medium border shadow-sm ${
            isSigned
              ? 'bg-blue-600d hover:bg-blue-700 border-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300'
          }`}
        >
          Save Signature
        </button>
      </div>

      {/* Preview Box */}
      {imageUrl && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <p className="text-sm mb-2">Saved Signature:</p>
          <img
            src={imageUrl}
            alt="Saved signature"
            className="max-h-32 border border-gray-200"
          />
        </div>
      )}
    </div>
  );
>>>>>>> Stashed changes
};

export default HeaderRestaurents;
