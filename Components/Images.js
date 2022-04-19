import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

export default function Images() {
  return (
    <div className="container">
      <h1>
        <strong>Blurring faces in Images with Cloudinary and Next.js</strong>
      </h1>
      <br />
      <CloudinaryContext cloudName="Kizmelvin">
        <div className="b-img">
          <h2>
            1.<strong>Default Blur Faces Effect</strong>
          </h2>
          <Image
            publicId="local-uploads/naassom-azevedo-Q_Sei-TqSlc-unsplash_hxemjj.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="700" width="1000" />
            <Transformation effect="pixelate_faces" />
          </Image>
        </div>
        <div className="b-img">
          <h2>
            2.<strong>Light Blur Faces Effect</strong>
          </h2>
          <Image
            publicId="local-uploads/windows-p74ndnYWRY4-unsplash_cibvcp.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="700" width="1000" />
            <Transformation effect="pixelate_faces:10" />
          </Image>
        </div>
        <div className="b-img">
          <h2>
            3.<strong>Thick Blur Faces Effect</strong>
          </h2>
          <Image
            publicId="local-uploads/jason-goodman-fznQW-kn5VU-unsplash_gdnoru.jpg"
            className="b-img"
          >
            <Transformation crop="scale" height="1200" width="1000" />
            <Transformation effect="pixelate_faces:40" />
          </Image>
        </div>
      </CloudinaryContext>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .b-img {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
}
