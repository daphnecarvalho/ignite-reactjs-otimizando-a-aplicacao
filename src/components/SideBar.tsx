import { AutoSizer, List, ListRowRenderer } from "react-virtualized";

import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const genre = genres[index];
    return (
      <div key={key} style={style}>
        <Button
          key={genre.id}
          title={genre.title}
          iconName={genre.name}
          onClick={() => buttonClickCallback(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      </div>
    );
  };

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        <AutoSizer disableHeight>
          {({ width }) => {
            return (
              <List
                height={document.body.offsetHeight - 200}
                rowHeight={75}
                rowCount={genres.length}
                rowRenderer={rowRenderer}
                width={width}
              />
            );
          }}
        </AutoSizer>
      </div>
    </nav>
  );
}
