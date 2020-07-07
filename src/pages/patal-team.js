import React from "react";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import GridStyles from "~/assets/styles/grid.module.css";
import TeamStyles from "~/assets/styles/teams/index.module.css";
import PaddingStyles from "~/assets/styles/padding.module.css";

import MemberCard from "~/src/components/atoms/MemberCard/MemberCard.js";

import TeamData from "~/assets/data/teams.json";

class PatalTeam extends React.PureComponent {
  state = {
    first_row_members: [],
    remainder_row_members: [],
  };

  componentDidMount() {
    this.setState({
      first_row_members: TeamData.slice(0, 2),
      remainder_row_members: TeamData.slice(0, TeamData.length),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className={`${TeamStyles["mainBg"]} ${PaddingStyles["p8"]}`}>
          <div
            className={`${GridStyles["grid"]} ${TeamStyles["gridTeamsRemainder"]} ${TeamStyles["gridTeams"]}`}>
            {this.state.remainder_row_members.map((team, i) => (
              <div key={i} className={`${TeamStyles["centerMargin"]}`}>
                <MemberCard
                  name={team.name}
                  job={team.job}
                  imageUrl={team.imageUrl}
                  links={team.links || {}}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PatalTeam;
