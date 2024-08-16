const Sparkles = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87223 0.137586C2.89605 -0.0458822 3.16255 -0.0458822 3.18572 0.137586C3.36791 1.56604 4.49251 2.68995 5.92035 2.87222C6.10446 2.89603 6.10446 3.16254 5.92035 3.18571C4.49254 3.36789 3.36799 4.49249 3.18572 5.92034C3.16255 6.10445 2.89604 6.10445 2.87223 5.92034C2.69005 4.49253 1.56609 3.36797 0.137601 3.18571C-0.0458669 3.16253 -0.0458669 2.89603 0.137601 2.87222C1.56606 2.69003 2.68997 1.56607 2.87223 0.137586Z"
        fill="#FD9E5F"
      />
      <path
        d="M9.44127 3.69687C9.48376 3.36535 9.96399 3.36535 10.0058 3.69687C10.3889 6.69665 12.7513 9.05917 15.7511 9.4415C16.0826 9.48399 16.0826 9.96422 15.7511 10.0061C12.7513 10.3891 10.3888 12.7516 10.0058 15.7514C9.96399 16.0829 9.48376 16.0829 9.44127 15.7514C9.0589 12.7516 6.69643 10.389 3.69664 10.0061C3.36512 9.96422 3.36512 9.48399 3.69664 9.4415C6.69643 9.05912 9.05895 6.69665 9.44127 3.69687Z"
        fill="#FD9E5F"
      />
    </svg>
  );
};

export default Sparkles;