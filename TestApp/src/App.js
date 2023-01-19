import { Fragment } from "react";
import "./App.css";
import SmallCard from "./components/SmallCard/SmallCard";
import SmallCardItem from "./components/SmallCard/SmallCardItem";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoCardItem from "./components/TodoCard/TodoCardItem";

const DUMMY_POST = [
  {
    id: "p1",
    title: "애국가 1절",
    thumbnail: "",
    contents:
      "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "안익태",
    },
  },
  {
    id: "p2",
    title: "긴 제목에 대해서 테스트를 하려고 한다 이것은 긴 제목이다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p3",
    title: "이것은 긴 제목이다 긴 제목에 대해서 테스트를 하려고 한다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p4",
    title: "가나다라마바사아자차카타파하",
    thumbnail: "",
    contents:
      "국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "하나둘셋넷다섯여섯",
    },
  },
  {
    id: "p5",
    title: "Ditto",
    thumbnail: "",
    contents:
      "Woo woo woo woo ooh Woo woo woo woo Stay in the middle Like you a little Don't want no riddle 말해줘 say it back Oh say it ditto 아침은 너무 멀어 So say it ditto 훌쩍 커버렸어 함께한 기억처럼 널 보는 내 마음은 어느새 여름 지나 가을 기다렸지 all this time Do you want somebody Like I want somebody 날 보고 웃었지만 Do you think about me now yeah All the time yeah All the time I got no time to lose",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "뉴진스",
    },
  },
  {
    id: "p6",
    title: "애국가 1절",
    thumbnail: "",
    contents:
      "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "안익태",
    },
  },
  {
    id: "p7",
    title: "긴 제목에 대해서 테스트를 하려고 한다 이것은 긴 제목이다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p8",
    title: "이것은 긴 제목이다 긴 제목에 대해서 테스트를 하려고 한다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p9",
    title: "가나다라마바사아자차카타파하",
    thumbnail: "",
    contents:
      "국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "하나둘셋넷다섯여섯",
    },
  },
  {
    id: "p10",
    title: "Ditto",
    thumbnail: "",
    contents:
      "Woo woo woo woo ooh Woo woo woo woo Stay in the middle Like you a little Don't want no riddle 말해줘 say it back Oh say it ditto 아침은 너무 멀어 So say it ditto 훌쩍 커버렸어 함께한 기억처럼 널 보는 내 마음은 어느새 여름 지나 가을 기다렸지 all this time Do you want somebody Like I want somebody 날 보고 웃었지만 Do you think about me now yeah All the time yeah All the time I got no time to lose",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "뉴진스",
    },
  },
  {
    id: "p11",
    title: "애국가 1절",
    thumbnail: "",
    contents:
      "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "안익태",
    },
  },
  {
    id: "p12",
    title: "긴 제목에 대해서 테스트를 하려고 한다 이것은 긴 제목이다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-06",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p13",
    title: "이것은 긴 제목이다 긴 제목에 대해서 테스트를 하려고 한다",
    thumbnail: "",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "USERNAME_LENGTH",
    },
  },
  {
    id: "p14",
    title: "가나다라마바사아자차카타파하",
    thumbnail: "",
    contents:
      "국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "하나둘셋넷다섯여섯",
    },
  },
  {
    id: "p15",
    title: "Ditto",
    thumbnail: "",
    contents:
      "Woo woo woo woo ooh Woo woo woo woo Stay in the middle Like you a little Don't want no riddle 말해줘 say it back Oh say it ditto 아침은 너무 멀어 So say it ditto 훌쩍 커버렸어 함께한 기억처럼 널 보는 내 마음은 어느새 여름 지나 가을 기다렸지 all this time Do you want somebody Like I want somebody 날 보고 웃었지만 Do you think about me now yeah All the time yeah All the time I got no time to lose",
    date: "2023-01-07",
    user: {
      picture: "",
      username: "뉴진스",
    },
  },
];

const DUMMY_TODO = {
  id: "p1",
  title: "리액트 강의 듣기",
  startDate: "2023-01-06",
  endDate: "2023-01-20",
  todoList: [
    {
      todoId: "t1",
      title: "리액트: Track 12",
      description: "12강 너무 어렵다",
      isDone: false,
      dueDate: "2023-01-10",
    },
    {
      todoId: "t2",
      title: "모달폼 구성",
      description: "모달폼을 구성해보자",
      isDone: true,
      dueDate: "2023-01-12",
    },
    {
      todoId: "t3",
      title: "화살표 함수",
      description: "함수형 컴포넌트",
      isDone: false,
      dueDate: "2023-01-16 ",
    },
  ],
};
// {
//   id: "p2",
//   title: "알고리즘",
//   startDate: "2023-01-10",
//   endDate: "2023-01-22",
//   todoList: [
//     {
//       todoId: "t4",
//       title: "백준",
//       description: "백준 하나 풀어야지",
//       isDone: true,
//       dueDate: "2023-01-15",
//     },
//     {
//       todoId: "t5",
//       title: "프로그래머스",
//       description: "프로그래머스 하나 풀어야지",
//       isDone: false,
//       dueDate: "2023-01-17",
//     },
//   ],
// },;

function App() {
  const postList = DUMMY_POST.map((post) => (
    <SmallCardItem
      id={post.id}
      key={post.id}
      thumbnail={post.thumbnail}
      title={post.title}
      contents={post.contents}
      userpicture={post.user.picture}
      username={post.user.username}
      date={post.date}
    />
  ));

  const todoCardItemList = DUMMY_TODO.todoList.map((data) => (
    <TodoCardItem
      id={data.todoId}
      key={data.todoId}
      title={data.title}
      description={data.description}
      isDone={data.isDone}
      dueDate={data.dueDate}
    />
  ));

  return (
    <Fragment>
      {/* <SmallCard>
        <ul>{postList}</ul>
      </SmallCard> */}
      <TodoCard title={DUMMY_TODO.title} id={DUMMY_TODO.id} key={DUMMY_TODO.id}>
        <ul>{todoCardItemList}</ul>
      </TodoCard>
    </Fragment>
  );
}

export default App;