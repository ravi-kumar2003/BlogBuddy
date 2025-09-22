import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function CommentTableItem({ comment, fetchComments }) {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>:{blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>:{comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>:{comment.context}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ?<FcCheckmark />:<p className="text-xs border border-green-600 rounded-full px-3 py-1">Approved</p>}
          <RiDeleteBin2Line />
          
        </div>
      </td>
    </tr>
  );
}
