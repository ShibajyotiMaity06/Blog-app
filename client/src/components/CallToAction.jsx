import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to know more about the creator?</h2>
        <p className="text-gray-500 my-2">Checkout my LinkedIn profile</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://linkedin.com/in/shibajyoti-maity-5992b126a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my Profile
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://news.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg" />
      </div>
    </div>
  );
}
