import { Delete } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function VerifyDelete(props) {
  const {
    name,
    handleDelete,
    handleModal,
    modal,
    type,
    CustomButton,
    disabled,
  } = props;

  return (
    <>
      {!CustomButton && (
        <IconButton disabled={disabled} onClick={handleModal} color="error">
          <Delete />
        </IconButton>
      )}

      {CustomButton && <CustomButton {...props} />}

      <Modal onClose={handleModal} className="flex" open={modal}>
        <div className="bg-white w-fit m-auto my-auto px-1-4 py-1-0 rounded-1-2">
          <h2 className="text-red">Delete</h2>

          <div className="p-2-0">
            <div className="text-grey">
              Are you sure want to delete this {type}:
              <span className="fw-bolder"> {name}?</span>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-1-0 mt-2-0">
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={handleModal}
                >
                  Decline
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  onClick={handleDelete}
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

VerifyDelete.propTypes = {
  name: PropTypes.string,
  handleDelete: PropTypes.func,
  handleModal: PropTypes.func,
  modal: PropTypes.bool,
  type: PropTypes.string,
  CustomButton: PropTypes.any,
  disabled: PropTypes.bool,
};
VerifyDelete.defaultProps = {
  name: '',
  handleDelete: () => {},
  handleModal: () => {},
  modal: false,
  type: '',
  CustomButton: () => {},
  disabled: false,
};
export default VerifyDelete;
