export function tailwindHeightToPixels(str: string): string {
  if(!str.startsWith("h-"))throw Error(`Invalid tailwind height string: ${str}`);
  const stripStr = str.substring(2);
  if(stripStr.startsWith("[")){
    const removedBrackets = stripStr.slice(1, -1);
    return removedBrackets
  }else{
    const convertWithMap = heightMap[stripStr]
    if(!convertWithMap)throw Error(`Invalid tailwind height string: ${str}`)
    return convertWithMap
  }
}

const heightMap: {[key: string]: string} = {
  "0": "0rem",
  'px': "1px",
  '1': "0.25rem",
  '2': "0.5rem",
  '3': "0.75rem",
  '4': "1rem",
  '5': "1.25rem",
  '6': "1.5rem",
  '7': "1.75rem",
  '8': "2rem",
  '9': "2.25rem",
  '10': "2.5rem",
  '11': "2.75rem",
  '12': "3rem",
  '14': "3.5rem",
  '16': "4rem",
  '20': "5rem",
  '24': "6rem",
  '28': "7rem",
  '32': "8rem",
  '36': "9rem",
  '40': "10rem",
  '44': "11rem",
  '48': "12rem",
  '52': "13rem",
  '56': "14rem",
  '60': "15rem",
  '64': "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem",
  'full': '100%',
  'screen': '100vh',
  'svh': '100svh',
  'lvh': '100lvh',
  'dvh': '100dvh',
  '0.5': '0.125rem',
  '1.5': '0.375rem',
  '2.5': '0.625rem',
  '3.5': '0.875rem',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '83.333333%',
  '5/6': '80%',
};