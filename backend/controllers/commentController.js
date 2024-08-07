const Comment = require('../models/Comment');
const Product = require('../models/Product');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Import generateCommentID from utils/idGenerators
const { generateCommentID } = require('../utils/idGenerators');

// Create a new comment
exports.createComment = async (req, res) => {
  const { ProductID, AccountID, Rating, CommentContent, isReplied, CommentDate } = req.body;
  
  try {
    const comment = await Comment.findOne({ AccountID: AccountID, ProductID: ProductID });

    if (!comment) {
      const newComment = new Comment({
        CommentID: await generateCommentID(),
        ProductID,
        AccountID,
        Rating,
        CommentContent,
        isReplied,
        CommentDate,
      });
      await newComment.save();

      res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } else {
      res.status(404).json({ message: 'You can only create a comment once' });
    }
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Get comments by ProductID
exports.getCommentsByProductId = async (req, res) => {
  const { ProductID } = req.params;

  try {
    const comments = await Comment.find({ ProductID: ProductID });
    if (comments.length === 0) {
      return res.status(404).json({ message: 'No comments found for this product' });
    }

    res.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a comment by CommentID
exports.updateComment = async (req, res) => {
  const { CommentID } = req.params;
  const { ProductID, CommentContent, isReplied } = req.body;

  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { CommentID: CommentID },
      { ProductID, CommentContent, isReplied },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment updated successfully', comment: updatedComment });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Delete a comment by CommentID
exports.deleteComment = async (req, res) => {
  const { CommentID } = req.params;

  try {
    const comment = await Comment.findOneAndDelete({ CommentID: CommentID });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
