import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus felis rhoncus maximus pharetra. Curabitur aliquam justo
                elit, eget vulputate ex viverra vulputate. Mauris nisi nisl,
                ultricies vel nibh ac, consectetur lacinia velit. Cras venenatis
                justo ac erat finibus porta ut in mi. Vestibulum sit amet ante
                pulvinar, volutpat erat et, ullamcorper sem. Pellentesque
                convallis magna sapien, ut pulvinar mi mattis et. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}