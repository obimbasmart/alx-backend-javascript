import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((res) => res.body)
    .then((body) => {
      createUser()
        .then((res) => {
          console.log(`${body} ${res.firstName} ${res.lastName}`);
        });
    });
}
