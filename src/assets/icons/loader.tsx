const LoaderIcon = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
      width={20}
      height={20}
    >
      <path
        fill="#000"
        d="M43.935,25.145c-0.553,0-1-0.447-1-1c0-10.493-8.532-19.025-19.025-19.025c-10.493,0-19.025,8.532-19.025,19.025
      c0,0.553-0.447,1-1,1s-1-0.447-1-1C2.905,13.033,11.937,4,23.01,4S43.115,13.033,43.115,24.145
      C43.115,24.698,43.488,25.145,43.935,25.145z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default LoaderIcon;
