import cat from "../assets/cat.jpg";
import princess from "../assets/princessCat.jpg";

export default class PersonModel {

    people = [
        {
            partnerId: "1",
            name: "키렌",
            age: "22",
            veganType: "비건",
            imageLink: cat,
            location1: "Seoul",
            location2: "Mapo",
            hobby1: "수영",
            hobby2: "찬희랑 놀기",
            hobby3: "자기"
        },
        {
            partnerId: "2",
            name: "찬희",
            age: "22",
            veganType: "비건",
            imageLink: princess,
            location1: "Seoul",
            location2: "Mapo",
            hobby1: "수영",
            hobby2: "키렌랑 놀기",
            hobby3: "자기"
        }
    ];

    currentIndex = 0;
    
    person = {
        partnerId: "1",
        name: "키렌",
        age: "22",
        veganType: "비건",
        imageLink: cat,
        location1: "Seoul",
        location2: "Mapo",
        hobby1: "수영",
        hobby2: "찬희랑 놀기",
        hobby3: "자기"
    };
}

export var person = new PersonModel();