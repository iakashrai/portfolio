import styled,{keyframes,css} from "styled-components";
import award1 from '../images/award-1.svg'
import award2 from '../images/award-2.svg'
import award3 from '../images/award-3.svg'
import award4 from '../images/award-4.svg'


function MarqueeComponent() {

  const row1 = [
    {id:1,src:award1},
    {id:2,src:award2},
    {id:3,src:award3},
    {id:4,src:award4}
  ]

  return (
    <Marquee>
        <MarqueeGroup>
            {row1.map((el) => (
                <ImageGroup>
                    <Image key={el.id} src={el.src} />
                </ImageGroup>
            ))}
        </MarqueeGroup>
        <MarqueeGroup>
            {row1.map((el) => (
                <ImageGroup>
                    <Image key={el.id} src={el.src} />
                </ImageGroup>
            ))}
        </MarqueeGroup>
    </Marquee>
  )
}

export default MarqueeComponent;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;