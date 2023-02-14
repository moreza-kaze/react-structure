import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import Button from '../components/Button';
import Test from '../feature/home/TestHome';
import { api } from '../utils';
import useAxios from '../hooks/useAxios';

function App() {
   const [ldata, setlData] = useState<boolean>(false);
   useAxios(
      {
         method: 'get',
         url: 'https://jsonplaceholder.typicode.com/posts'
      },
      [ldata]
   );

   return (
      <>
         <div className="flex bg-black justify-center text-3xl font-bold underline ">
            <h1 className="text-red-500">hello world</h1>
            <Button
               onClick={(): void => {
                  setlData(!ldata);
               }}
               className="text-white"
            >
               eweer
            </Button>
         </div>
         <div>
            <Test />
         </div>
      </>
   );
}

export default App;
