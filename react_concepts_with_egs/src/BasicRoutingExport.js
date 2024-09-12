function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>This is home page.</p>
        </div>
    )
}
function About() {
    return (
        <div>
            <h2>About</h2>
            <p>This is about page.</p>
        </div>
    )
}
function PageNotFound() {
    return (
        <>
            <h2>OOPs Page not found...</h2>
            <p>No page with this url is present</p>
        </>
    )
}

export { Home, About, PageNotFound }