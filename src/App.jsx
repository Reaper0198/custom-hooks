import './App.css';
import GetPostCard from './components/getPostCard';
import IncreaseValueCard from './components/IncreaseValueCard';
import PollingGetPostCard from './components/PollingGetPostCard';

export default function App() {
    return (
        <>
            <IncreaseValueCard />
            <GetPostCard />
            <PollingGetPostCard />
        </>
    )
}


