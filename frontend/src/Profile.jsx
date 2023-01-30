import React from "react";
import { Component } from "react";
import cat from "./cat.jpg";
import { useState,  useEffect} from "react";
import ModalFollowers from "./Modal";
import ModalFollowing from "./ModalFollowing";
import { useNavigate } from "react-router-dom";

const followers = 
[
	{ id: "id1", name: "BelugaFan" },
	{ id: "id2", name: "BelugaNeighbour" },
	{ id: "id3", name: "BelugaMoM" },
]

const following = 
[
	{ id: "id1", name: "BelugaFan" },
	{ id: "id2", name: "BelugaNeighbour" },
	{ id: "id3", name: "BelugaMoM" },
]
const Profile = () =>
{    const navigate = useNavigate();
	useEffect(() => {
		if(localStorage.getItem("logged")==="false" || (!localStorage.getItem("logged")))
	{	console.log("lae chak mai agya")
		navigate("/");}
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        setUserName(storedName);
    }
    const storedBio = localStorage.getItem("userBio");
    if (storedBio) {
        setUserBio(storedBio);
    }
  }, []);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const[modal2IsOpen,setModal2IsOpen] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "Thecoolcat");         //default value or what it was previously
    const[userBio, setUserBio] = useState(localStorage.getItem("userBio") || "I am Beluga - your favourite cat");
    

    const handleEditProfile = () => 
	{
    const updatedName = prompt("Enter new name:");
    setUserName(updatedName);
    localStorage.setItem("userName", updatedName);
    const updatedBio = prompt("Enter new Bio:");
    setUserBio(updatedBio);
    localStorage.setItem("userBio", updatedBio);
   }

   const handleLogout = () => 
   {
	//clear the user's current session
	localStorage.removeItem("userName");
	localStorage.removeItem("userBio");
	localStorage.setItem("logged",false);
	navigate("/");  // Navigate to the login page
   }

   
  
	return(
    <div>
	<div class="container">

		<div class="profile">

			<div class="profile-image">

				<img src= "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466428__340.jpg" alt=""/>
			</div>

			<div class="profile-user-settings">

				<h1 class="profile-user-name">{userName}</h1>

				<button class="btn profile-edit-btn" onClick={handleEditProfile}>Edit Profile</button>

			</div>

			<div class="profile-stats">
               <button class = "Posts">Posts</button>
			   <button class = "Followers" onClick={() => setModalIsOpen(!modalIsOpen)} >Followers</button>

			   <button class = "Following" onClick={() => setModal2IsOpen(!modal2IsOpen)}>Following</button>


			</div>
			
		{modalIsOpen ? (
    <ModalFollowers followers={followers} closeModal={() => setModalIsOpen(false)} />
):null}
{modal2IsOpen ? (
    <ModalFollowing following={following} closeModal2={() => setModal2IsOpen(false)} />
):null}

<div>
<button class="logout" onClick={handleLogout}>Logout</button>

</div>

			<div class="profile-bio">

				<p>{userBio}</p>

			</div>

		</div>
	</div>

	<div class="container">

		<div class="gallery">

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
					</ul>

				</div>

			</div>


			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-type">

					<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>
			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

		</div>

	</div>
</div>
    );
}


export default Profile;