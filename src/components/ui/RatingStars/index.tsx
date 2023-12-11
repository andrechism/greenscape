import Icon from "../Icon"

type RatingStartProps = {
    stars: number
    max?: number
}

export const RatingStars = ({
    stars,
    max = 5,
  }: RatingStartProps) => {
    return (
      <div className="flex ml-4">
        {
          [...Array(max)].map((_, index) => (
            index < stars 
            ? <Icon key={'key-' + index} name="icon-filledstar" width={12} height={11} />
            : <Icon key={'key-' + index} name="icon-emptystar" width={12} height={11} />
          ))
        }
      </div>
    )
  }