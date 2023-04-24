import FavoriteIcon from "@mui/icons-material/Favorite";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateIcon from "@mui/icons-material/Create";
import PropTypes from "prop-types";
import { Fragment } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Block } from "@mui/icons-material";
import ROUTES from "../routes/ROUTES";

const CardComponent = ({
  img,
  title,
  subTitle,
  phone,
  address,
  cardNumber,
  id,
  onDelete,
  onDeletefav,
  onEdit,
  onInfo,
  canEdit,
  canEditPrivate,
  user_id,
  canDelete,
  canFav,
  card,
}) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  console.log(payload);
  const handleDeleteBtnClick = () => {
    console.log("id", id);
    onDelete(id);
  };
  const handleEditBtnClick = () => {
    onEdit(id);
  };
  const handleInfoBtnClick = () => {
    onInfo(id);
  };
  const handleFavBtnClick = async () => {
    try {
      await axios.patch("/cards/card-like/" + id);
      onDeletefav(id);
    } catch (err) {
      console.log("error when change fav", err.response.data);
    }
  };
  // const moreInformation = (id) => {
  //   navigate(ROUTES.MOREINFORMATIOMPAGE);
  // };
  //   try {
  //     axios.get("/cards/cards").then(({ data }) => {
  //       console.log("data", data);
  //       //  console.log("'cardsarr:", cardsArrToFilter);
  //       let dataArr = Object.entries(data);
  //       console.log("dataArr before change", dataArr);
  //       console.log("cardsArr after creating dataArr", data);
  //       setCardsArr(
  //         dataArr.filter((card) =>
  //           card[1]["likes"].includes(jwt_decode(localStorage.token)._id)
  //         )
  //       );
  //     });
  //   } catch (err) {
  //     console.log("err from axios", err);

  //     toast.error("Oops");
  //   }
  //};
  return (
    <Card square raised>
      <CardActionArea onClick={handleInfoBtnClick}>
        <CardMedia component="img" image={img} />
      </CardActionArea>
      <CardHeader
        title={title}
        subheader={subTitle}
        onClick={handleInfoBtnClick}
      ></CardHeader>
      <CardContent onClick={handleInfoBtnClick}>
        <hr />
        <Typography>{"Phone: " + phone}</Typography>
        <Typography>{"Address: " + address}</Typography>
        <Typography>{"Card Number: " + cardNumber}</Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
          {payload &&
          (payload.isAdmin || (canEditPrivate && payload._id === user_id)) ? (
            <Fragment>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={handleDeleteBtnClick}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Fragment>
          ) : (
            ""
          )}
          {(canEdit || canEditPrivate) && payload._id === user_id ? (
            <Fragment>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={handleEditBtnClick}
              >
                <CreateIcon />
              </IconButton>
            </Fragment>
          ) : (
            ""
          )}
        </Box>
        <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <CallIcon />
          </IconButton>
          {/* <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={handleFavBtnClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
      {/* <Button
          variant="text"
          color="primary"
          sx={{
            flexGrow: 1,
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PhoneIcon
            sx={{
              flexGrow: 1,
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Button>
        {isLoggedIn ? (
          <Button
            variant="text"
            color="primary"
            sx={{
              flexGrow: 1,
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={handleFavBtnClick}
          >
            <FavoriteIcon
              sx={{
                flexGrow: 1,
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            />
          </Button>
        ) : (
          ""
        )}
        {(canEdit || canEditPrivate) && payload._id === user_id ? (
          <Fragment>
           
            <Button variant="text" color="warning" onClick={handleEditBtnClick}>
              <EditIcon />
            </Button>
          </Fragment>
        ) : (
          ""
        )}
        {payload.isAdmin || (canEditPrivate && payload._id === user_id) ? (
          <Fragment>
            <Button variant="text" color="error" onClick={handleDeleteBtnClick}>
              <DeleteIcon />
            </Button>
          </Fragment>
        ) : (
          ""
        )}
        */}
    </Card>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  canEdit: PropTypes.bool,
};

CardComponent.defaultProps = {
  img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  subTitle: "",
  canEdit: false,
};

export default CardComponent;
