import Image from "next/image";
import React from "react";

const CreditPage = () => {
  return (
    <div className="flex-center mt-10 w-ful">
      <div className="text-center p-8">
        <h1 className="h1-semibold text-primary mb-4">
          This page is under construction
        </h1>
        <Image
          src="/assets/images/underconstruction.webp"
          alt="Under Construction"
          className="mx-auto mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          width={500}
          height={500}
        />

        <p className="p-20-regular text-secondary">Please check back later.</p>
      </div>
    </div>
  );
};

export default CreditPage;
