import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    ListItemText,
} from "@material-ui/core";

const categories = [
    {
        label: "Blog",
        value: "Blog",
    },
    {
        label: "Travel",
        value: "Travel",
    },
    {
        label: "Journey",
        value: "Journey",
    },
];

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);

    const handleChane = (event) => {
        setTitle(event.target.value);
    };

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title === "") {
            setError(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant="h3">Add Post</Typography>
                <TextField
                    placeholder="Enter Your Blog Post"
                    fullWidth
                    value={title}
                    onChange={handleChane}
                    error={error}
                    helperText="Title of the blog post is required"
                />
                <Select
                    multiple
                    displayEmpty
                    onChange={handleCategory}
                    value={category}
                    renderValue={(seleceted) =>
                        category.length === 0 ? "Select" : seleceted.join(", ")
                    }
                >
                    {categories.map((category) => (
                        <MenuItem value={category.value}>
                            <ListItemText primary={category.label} />
                        </MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="outlined" color="primary">
                    Add Post
                </Button>
            </form>
        </>
    );
};

export default PostForm;
