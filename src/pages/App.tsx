import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import Button from '../components/Button';
import Test from '../feature/home/TestHome';
import { api } from '../utils';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function App() {
   const [ldata, setlData] = useState<boolean>(false);
   const name = useSelector((store: RootState) => store.name.value);
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
               {name}
            </Button>
         </div>
         <div>
            <Test />
         </div>
      </>
   );
}

export default App;
