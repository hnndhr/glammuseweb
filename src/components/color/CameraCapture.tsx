'use client';

import { useEffect, useRef, useState } from "react";

const CameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Kamera tidak bisa diakses. Pastikan Anda sudah memberi izin.");
        console.error(err);
      }
    };

    getCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <video ref={videoRef} autoPlay playsInline muted className="w-full max-w-md rounded-lg shadow" />
      )}
    </div>
  );
};

export default CameraCapture;