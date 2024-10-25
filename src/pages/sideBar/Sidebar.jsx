  import CommingSoon from "../../assets/icons/commingSoon.svg"
  import NewRelease from "../../assets/icons/newRelease.svg"
  import WachtLater from "../../assets/icons/watchLater.svg"
  import Trending from "../../assets/icons/trending.svg" 
  import Favourite from "../../assets/icons/favourite.svg"


export default function SideBar(){
    return (
        <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={Trending} width="24" height="24" alt="Trending" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={NewRelease} width="24" height="24" alt="NewRelase" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={CommingSoon} width="24" height="24" alt="CommingSoon" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Favourite} width="24" height="24" alt="Favourite" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={WachtLater} width="24" height="24" alt="WatchLater" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
    );
}