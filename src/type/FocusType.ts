export type FocusStoreType = {
    focusedKey: string;
    prevLeftMenu: string;
    prevMovieCard: string;
    actions: {
      setFocusedKey: (key: string) => void;
      setPrevLeftMenu: (key: string) => void; 
      setPrevMovieCard: (key: string) => void;
    }
};


export enum FocusKeyElemType {
  MOVIE_CARD = 'movie-card-',
  PLAY_BUTTON = 'play-button',
  ICON = 'icon-',
  MENU = 'menu-',
}
export enum KeyDirection {
  NEXT = 'next',
  PREV = 'prev',
}

export enum KeyEventType  {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
  ENTER = 'Enter',
}



