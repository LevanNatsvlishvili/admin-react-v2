import { Link } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';

interface BackToBrowseProps {
  to: string;
}

const BackToBrowse = ({ to }: BackToBrowseProps) => {
  return (
    <div className="mb-2-4 ">
      <Link className="hover:text-blue" to={to}>
        <ArrowBackIosNew className="mr-1-0" sx={{ width: 14 }} />
        <span className="align-middle">Back to Browse</span>
      </Link>
    </div>
  );
};

export default BackToBrowse;
