import { styled } from "../../stitches.config";

const SplashView = styled("div", { display: "grid", placeItems: "center" });

type Props = {
  onClick: () => void;
};

export default ({ onClick }: Props) => (
  <SplashView>
    <button onClick={onClick}>Hwaiting...</button>
  </SplashView>
);
