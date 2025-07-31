export default class Rank {
    ratingList = {
        10: {
            rank: "Iron Tier",
            className: "tier Iron",
        },
        20: {
            rank: "Bronze Tier",
            className: "tier Bronze"
        },
        30: {
            rank: "Silver Tier",
            className: "tier Silver"
        },
        40: {
            rank: "Gold Tier",
            className: "tier Gold"
        },
        50: {
            rank: "Platinum Tier",
            className: "tier Platinum"
        },
        60: {
            rank: "Diamond Tier",
            className: "tier Diamond"
        },
        70: {
            rank: "Emerald Tier",
            className: "tier Emerald"
        },
        80: {
            rank: "Ruby Tier",
            className: "tier Ruby"
        },
        90: {
            rank: "Titan Tier",
            className: "tier Titan"
        },
        100: {
            rank: 'PI Tier',
            className: 'tier Pi',
        }
    };

    updateRank(_rating) {
        let rank;
        let _className = 'tier PI';

        let _result = {
            rank: "Iron Tier",
            className: "tier Iron"
        };

        for (var i = 0; i <= 100; i += 1) {
            let tenStep = Math.floor(i / 10) * 10;
            console.log(_rating, tenStep)

            if (_rating == i) {
                if (this.ratingList[tenStep]) {
                    _result = {
                        'rank': this.ratingList[tenStep].rank,
                        'className': this.ratingList[tenStep].className
                    };
                    break;
                }
            }
        }
        return _result;
    }
}