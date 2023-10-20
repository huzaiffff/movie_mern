import { useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <div>
      <img 
        src="./assets/movie.png" 
        alt="Laila Movie" 
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
};

export default Logo;
