const PageIntro = ({
  heading,
  message1,
  message2,
  message3,
  message4,
  message5,
}) => {
  return (
    <div className="font-semibold flex flex-col gap-4 border border-secondary-0 p-4 rounded-lg mb-6 border-r-0 rounded-r-none">
      <h1 className="text-custom-blue text-xl capitalize">{heading}</h1>
      <div>
        <h2 className="text-base text-secondary-80">{message1}</h2>
        <p className="text-sm text-secondary-70">{message2}</p>
        {message3 ? (
          <div className="flex gap-3 text-secondary-50 font-semibold">
            <p>{message3}</p>
            <p>{message4}</p>
            <p>{message5}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageIntro;
