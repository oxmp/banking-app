import { IIconProps } from "@/interfaces/components";

export const IcHistory: React.FC<IIconProps> = ({
  active
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill={active ? "white" : "black"} version="1.1" id="Capa_1" viewBox="0 0 219.15 219.15">
      <g>
        <path d="M109.575,0C49.156,0,0.001,49.155,0.001,109.574c0,60.42,49.154,109.576,109.573,109.576   c60.42,0,109.574-49.156,109.574-109.576C219.149,49.155,169.995,0,109.575,0z M109.575,204.15   c-52.148,0-94.573-42.427-94.573-94.576C15.001,57.426,57.427,15,109.575,15c52.148,0,94.574,42.426,94.574,94.574   C204.149,161.724,161.723,204.15,109.575,204.15z" />
        <path d="M166.112,108.111h-52.051V51.249c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v64.362c0,4.142,3.358,7.5,7.5,7.5   h59.551c4.143,0,7.5-3.358,7.5-7.5C173.612,111.469,170.254,108.111,166.112,108.111z" />
      </g>
    </svg>
  );
}

IcHistory.displayName = "IcHistory";