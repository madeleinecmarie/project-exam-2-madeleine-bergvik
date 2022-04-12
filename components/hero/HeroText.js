import styled from "styled-components";

// const HeroParagraph = styled.div`
//   font-size: var(--hero-text);
//   color: var(--white);
// `;

function HeroText() {
  return (
    <div>
      <p className="text-xs font-bold text-white leading-line-3 my-32 pl-24">
        Be adventurous in
        <span className="text-xl font-black text-white block">STAVANGER</span>
      </p>
    </div>
  );
}

export default HeroText;
