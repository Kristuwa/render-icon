import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faShieldHeart,
  faUpload,
  faUserNinja,
  faArrowsAltV,
} from "@fortawesome/free-solid-svg-icons";
import { Loader } from "./components/Loader/Loader";
import { Button } from "./components/Button/Button";
import { MainSection } from "./App.styled";

const DELAY_TIME = 3000;

function App() {
  const [icon, setIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const icons = useMemo(
    () => [faGears, faShieldHeart, faUpload, faUserNinja, faArrowsAltV],
    []
  );

  const handleButtonClick = useCallback(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const timerId = setTimeout(() => {
        const { length } = icons;
        const randomIndex = Math.floor(Math.random() * length);
        const randomIcon = icons[randomIndex];
        setIcon(randomIcon);
        setIsLoading(false);
      }, DELAY_TIME);

      return () => clearTimeout(timerId);
    }
  }, [isLoading, icons]);

  return (
    <main>
      <MainSection>
        {icon && !isLoading && <FontAwesomeIcon icon={icon} />}
        {isLoading && <Loader />}
        <Button handleButtonClick={handleButtonClick} isLoading={isLoading} />
      </MainSection>
    </main>
  );
}

export default App;
