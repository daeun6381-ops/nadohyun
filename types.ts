
export interface Challenge {
  id: string;
  title: string;
  type: 'Personal' | 'Group';
  durationDays: number;
  deposit: number;
  startDate: string;
  progress: number; // 0 to 100
  streak: number;
  imageUrl: string;
  status: 'active' | 'completed' | 'failed';
}

export interface User {
  name: string;
  balance: number;
  avatarUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  authorName: string;
  avatar?: string;
}

export interface PostComment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tag: string;
  commentsList?: PostComment[];
}

export interface Proof {
  id: string;
  challengeId: string;
  imageUrl: string;
  note: string;
  timestamp: string;
}
