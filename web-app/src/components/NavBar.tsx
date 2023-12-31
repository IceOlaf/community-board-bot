
type NavBarProps = {
    sortingSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    categoriesSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    office?: boolean;
}

export default function NavBar({ sortingSelectHandler, categoriesSelectHandler, office }: NavBarProps) {

    return (
        <nav className={`navbar p-1 level mb-0 ${office ? "is-info" : "is-primary"}`}>
            <div className="navbar-start">
                <p className="subtitle has-text-centered has-text-white">
                    {office ? "Manage your ads" : "Community board"}
                </p>
            </div>
            <div className="select m-2 is-flex is-flex-direction-row is-justify-content-space-between">
                <label htmlFor="sorting" className="m-2"
                style={{whiteSpace: "nowrap"}}>
                    Sort by</label>
                <select id="sorting" style={{width: "70%"}}
                onChange={sortingSelectHandler}>
                    <option>Latest first</option>
                    <option>Oldest first</option>
                </select>
            </div>
            <div className="select m-2 is-flex is-flex-direction-row is-flex-direction-row is-justify-content-space-between">
                <label htmlFor="categories" className="m-2">Categories</label>
                <select id="categories" style={{width: "70%"}}
                onChange={categoriesSelectHandler}>
                    <option>All ads</option>
                    <option>Electronics & appliances</option>
                    <option>Clothes & accessories</option>
                    <option>Help & services</option>
                    <option>Building materials & DIY</option>
                    <option>Cars, bikes & parts</option>
                    <option>Beauty & health</option>
                    <option>Other</option>
                </select>
            </div>
        </nav>
    )
}
