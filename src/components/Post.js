import React, {useEffect, useContext} from 'react';
import PostsContext from "../context/PostsContext";
import UserContext from "../context/UserContext";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import firebaseApi from "../firebase/firebaseApi";

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            // height:450
        },
        media: {
            height: 140,
        },
    }
));

const Posts = ({post}) => {
    const classes = useStyles();
    const changePostToEdit = useContext(PostsContext).changePostToEdit
    const userId = useContext(UserContext).data.uid
    const changePosts = useContext(PostsContext).changePosts
    const posts = useContext(PostsContext).data.posts

    function editBlog() {
        changePostToEdit(post)
    }

     const deleteHandle = async () => {
        const newPostsList = posts.filter((postObj)=>postObj.key !== post.key)
        changePosts(newPostsList)
        const collection = [{name:'posts',id:post.id}]
        await firebaseApi.deleteData(collection)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={editBlog}
            >
                <CardMedia
                    className={classes.media}
                    component="img"
                    src={post.pictureSrc}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton
                    onClick={deleteHandle}
                    aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <Button size="small" color="primary">
                    Share
                </Button>

            </CardActions>
        </Card>
    );
}

export default Posts

