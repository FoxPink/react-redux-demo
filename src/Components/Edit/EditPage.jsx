import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
import Input from "../InputFields/Input";
import "./edit.css";

const EditPage = (props) => {
  const { setEdit } = props;
  const avaUrl = [
    "http://clipart-library.com/images_k/chibi-transparent/chibi-transparent-11.png",
    "http://clipart-library.com/images_k/chibi-transparent/chibi-transparent-17.png",
    "http://clipart-library.com/images_k/chibi-transparent/chibi-transparent-22.png",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#FF8DC7");
  const [url, setUrl] = useState(user.avaUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme,
    };
    dispatch(update(updateUser));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close"> SAVE </button>

          <div className="edit-profile">REDUX DEMO</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />
            <label> Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((url) => {
                return (
                  <>
                    <img
                      onClick={(e) => setUrl(e.target.src)}
                      src={url}
                      className="input-image"
                      alt=""
                    />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              ></input>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
