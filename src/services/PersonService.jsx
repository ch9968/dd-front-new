import { person } from "../models/PersonModel";

const PersonService = {
  getPerson() {
    return person.person;
  },

  nextPerson() {
    if (person.currentIndex < person.people.length - 1) {
      person.currentIndex++;
    }
    person.person = person.people[person.currentIndex];
  },

  previousPerson() {
    if (person.currentIndex > 0) {
      person.currentIndex--;
    }
    person.person = person.people[person.currentIndex];
  },
};

export default PersonService;
