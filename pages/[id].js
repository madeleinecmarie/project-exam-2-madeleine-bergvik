// export const getDetailsId = async () => {
//   const res = await fetch("http://localhost:1337/hotels");
//   const data = res.json();

//   const paths = data.map((hotel) => {
//     return {
//       params: { id: hotel.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getId = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("http://localhost:1337/hotels/");
//   const data = await res.json();

//   return {
//     props: { hotel: data },
//   };
// };

const Details = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Details;
