import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

export default function CommentTableItem({ comment, fetchComments }) {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this comment ?"
      );
      if (!confirm) return;
      const { data } = await axios.post("api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>:{blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>:{comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>:{comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <FcCheckmark onClick={approveComment} className="cursor-pointer" />
          ) : (
            <p className="text-xs border border-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <RiDeleteBin2Line
            onClick={deleteComment}
            className="cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
}
