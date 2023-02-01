import { Image } from "react-bootstrap";

export const AboutOverview = () => {
  return (
    <div className="container mt-5 mb-5 mx-auto">
      <div className="row mx-auto">
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 fw-bold">Overview</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Donec sed odio dui. Donec id elit non mi porta
            gravida at eget metus. Donec ullamcorper nulla non metus auctor
            fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed
            odio dui. Donec id elit non mi porta gravida at eget metus. Donec
            ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
        </div>
        <div className="col-md-6 mx-auto d-flex justify-content-end">
          <Image
            className="rounded-5 shadow about-image-h mb-3"
            src="https://wsrv.nl/?url=https://inai.io/hs-fs/hubfs/Main%20differences%20between%202D%20and%203D%20payment%20gateways.jpeg?width=1081&name=Main%20differences%20between%202D%20and%203D%20payment%20gateways.jpeg"
            alt="About Us"
            width={625}
            height={470}
          />
        </div>
      </div>

      <div className="row mx-auto mt-5">
        <div className="col-md-6 mx-auto d-flex justify-content-start ">
          <Image
            className="rounded-5 shadow about-image-h mt-3"
            src="https://wsrv.nl/?url=https://cdn.dribbble.com/users/527197/screenshots/14632885/finance_dribbble_4x.png"
            alt="About Us"
            width={580}
            height={470}
          />
        </div>
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 fw-bold">Our Motto</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
            vehicula ut id elit. Donec sed odio dui. Donec id elit non mi porta
            gravida at eget metus. Donec ullamcorper nulla non metus auctor
            fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed
            odio dui. Donec id elit non mi porta gravida at eget metus. Donec
            ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget
            urna mollis ornare vel eu leo.
          </p>
        </div>
      </div>
    </div>
  );
};
