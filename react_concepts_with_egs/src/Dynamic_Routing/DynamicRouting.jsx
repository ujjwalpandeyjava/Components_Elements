import SelectUser from './SelectUser'
import DynamicPage from './DynamicPage'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const users = [
    { profile: "profile 1", id: 1, name: 'Ujjwal', email: 'ujjwal@test.com' },
    { profile: "profile 2", id: 2, name: 'Rahul', email: 'rahul@test.com' },
    { profile: "profile 3", id: 3, name: 'Suraj', email: 'suraj@test.com' },
    { profile: "profile 4", id: 4, name: 'Arbaaz', email: 'arbaaz@test.com' },
    { profile: "profile 5", id: 5, name: 'Savita', email: 'savita@test.com' },
    { profile: "profile 6   ", id: 44, name: 'Nitesh', email: 'nitesh@test.com' }
]

export default function DynamicRouting() {
    return (
        <div>
            <h1>Must be inside a BrowserRouter of main component</h1>
            <BrowserRouter>
                {users.map(eachUser => <div>
                    <Link className="link" to={`/user/${eachUser.email}`}>
                        Mail:  <SelectUser name={eachUser.name} />{eachUser.name}
                    </Link> <br />
                    <Link className="link" to={`/user/${eachUser.email}/${eachUser.profile}`}>
                        Profile: <SelectUser name={eachUser.profile} />{eachUser.profile}
                    </Link>
                </div>)}
                <Routes>
                    <Route path='/user/:email' element={<DynamicPage />} />
                    <Route path='/user/:email/:profile' element={<DynamicPage />} />
                    <Route path='*' element={<DynamicPage />} />
                </Routes>
            </BrowserRouter>
        </div >
    );
}