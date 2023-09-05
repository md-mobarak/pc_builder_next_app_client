"use client";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div>
      <Image
        src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1697673600&v=beta&t=ysuifpFxKxh8N-1O85Om_P_JvcJhG6AXTIlR-xlcYLY"
        width={300} // Set the actual width of your image (optional)
        height={200} // Set the actual height of your image (optional)
        layout="responsive" // Set layout to responsive
        alt="Picture of the author"
        loading="lazy"
      />
    </div>
  );
};

export default NotFound;
