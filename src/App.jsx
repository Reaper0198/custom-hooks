import './App.css';
import GetPostCard from './components/getPostCard';
import IncreaseValueCard from './components/IncreaseValueCard';
import PollingGetPostCard from './components/PollingGetPostCard';
import UseDebounceComp from './components/useDebounceComp';
import UsePrevComp from './components/usePrevComp';

export default function App() {
    return (
        <>
            <IncreaseValueCard />
            <GetPostCard />
            <PollingGetPostCard />
            <UsePrevComp /> 
            <UseDebounceComp />
        </>
    )
}


