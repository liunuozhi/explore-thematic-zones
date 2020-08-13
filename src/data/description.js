import React from "react";

export const ABSTRACT = (
  <div>
    <p>
      A place refers to an area. In the city, a place is associated with
      providing facilities to support socio-economic activities. Also, the sense
      of places can impact how people feel about the space. Given the context of
      rapid urbanization and globalization, urban planners need to be more aware
      of the diversity of places. Previous studies on place functions and human
      behaviors have provided insights on the place features and helped in
      classifying urban regions. Discovering the functions of places enables
      planners to monitor change of land use. It can help to inform them to
      allocate resources accordingly. Further, discovering characteristics can
      elicit future policy considering developing place attractiveness.
    </p>
    <p>
      Earlier research offers insights on discovering functional zones, while,
      consideration of people’s perception also helps urban studies to better
      understand the urban context. Despite prior observations of the physical
      characteristics, it remains unclear how people feel about the places. For
      example, a restaurant in a Central Business District (CBD) and one near a
      school have the same function of serving meals. However, people may
      perceive the restaurants differently according to their urban context.
      With that in mind, the purpose of the research is to explore whether and
      how people perceive places differently, and if these places have its
      distinguishing characteristics. To that end, this study applies topic
      models to explore the spatial distribution of both physical
      characteristics and human perceptions. Then, it employs distance measures
      to evaluate the similarity to examine the function-perception relation.
      Later, the concept of Uniqueness will be introduced to aggregate the
      similarities/differences to indicate the divergence among places. This
      research uses Singapore as a case study. The findings suggest that a more
      unique region tends to be dominant be a certain feature in terms of both
      functions and perceptions.
    </p>
    <p>
      A functional space may be perceived differently in different contexts.
      Therefore, using Singapore as the area of study, this study aims to
      understand the relationship between the tangibles and the intangibles in
      urban context. The tangibles will be reference to urban functions,
      facilities, and physical characteristics. The intangibles will be what
      people capture and feel about the space. A framework will be proposed for
      uncovering this relationship by processing large datasets. After data
      collected, a topic model is applied to extract the latent structure of
      features from the datasets by reducing the number of dimensions. It
      combines similar or correlated features to avoid the data sparsity. The
      latent structure defines two types of thematic zones: (1) a functional
      thematic zone for describing the physical characteristics, and (2) a
      perceptional thematic zone for exploring the human perceptions about the
      space with linguistically understanding.
    </p>
    <p>
      By comparing the thematic zones, this research aims to answer how people
      perceived spaces differently/ similarly, if two urban regions have
      similar/ different functions. This research employs quantitative analysis
      to measure the similarity of regions and correlations between the two
      aspects of data. As a result, this research also investigated whether the
      differentiation generated from the diversity of components within the
      region, or the uniqueness by comparing to other regions. Meanwhile, it
      raises a challenge to the model: what patterns can the thematic zones
      elicit from the datasets?
    </p>
    <p>
      This research used TripAdvisor metadata to explore the functional thematic
      zones, while it employed public Instagram check-in records to discover the
      perceptional thematic zones. With using regions to aggregated data points
      and attributes, each dataset contains thousands to millions of dimensions.
      The dimensions of features were retrieved as characteristics from
      TripAdvisor and keywords from Instagram. Then, topic models were employed
      to the datasets to reduce dimensions. The modelling returns both
      functional and perceptional thematic zones. By comparing the θ values from
      the models, the correlation between functions and perceptions can be
      estimated. The diversity index for measuring the θ values is to uncover
      the difference within the region. The uniqueness index allows to aggregate
      the difference of regions en masse.
    </p>
    <p>
      The topic models were applied to TripAdvisor and Instagram datasets. It
      employed Structural Topic Modeling to TripAdvisor POI functions.
      Structural Topic Modeling (STM) allows the model to have topical
      prevalence covariates. In this research, STM employed a logistic
      regression on M-patterns which has been introduced on methodology. It
      draws the ROIs attention to each thematic zone with a Dirichlet prior. The
      prior is based on the pattern of spatiotemporal trip distribution.
      Meanwhile, an LDA model was used for Instagram tokens.
    </p>
    <p>
      The model retrieved 30 thematic zones (prefix “TA”) for TripAdvisor, and
      30 thematic zones (prefix “IG”) for Instagram. The number K of thematic
      zones was chosen based on the recommended indicators. These indicators
      include residuals, semantic coherence and exclusivity. The goal was to
      find a K at a lower residual but a relative higher semantic coherence and
      exclusivity.
    </p>
    <p>
      The output of models contains β values and θ values. The β values uncover
      the thematic zone through the latent structure of features. The θ values
      infer which thematic zone a ROI belongs to.
    </p>
  </div>
);

export const CONTENT_FUNCTION_ZONE = (
  <div>
    <p>
      Each thematic zone defines a ROI by a latent structure of features. It
      consists of a vocabulary of functions/keywords and their ranking scores.
      The ranking score β indicates each function/keyword’s contribution to the
      formation of the thematic zone. It conveys a sense of how the thematic
      zone looks like.
    </p>
    <p>
      This map shows the spatial distribution of these functional thematic
      zones. Zone TA-12 is related to mid-range restaurants. It has the most
      numbers of thematic zone, and the central area has the highest density of
      the thematic zone. Zone TA-22 tends to be near the coastline which is
      dominant by Singaporean cuisine. Both Zone TA-14 (Shopping Zone) and Zone
      TA-21 (Art and Design) are similarly dispersed, but Zone TA-21 shows more
      skewed to central and east areas.
    </p>
    <p>
      The following bar chart illustrates the top 10 ranked functions in the
      vocabulary for selected thematic zone. By clicking the map, it allows to
      select the specific thematic zone. It provides a sense of what the
      thematic zone like. The tag of thematic zone is interpreted by this
      research for easier comprehension. For example, the vocabulary of Zone
      TA-27 is tagged with Nightlife zone which contains functions that are
      mostly various types of bars and clubs. However, some other types of
      functions also emerged, such as Fine-dining restaurant and Great View
      Hotel. Regarding to Zone TA-7 (Activities), it contains various activities
      and parks. Fun & Games, Game & Entertainment Centers and Nature & Parks
      and Outdoor activities formed the majority of the classifications. It also
      shows a significant portion of Airport Shops and Airport Lounges in Zone
      TA-19 (Transport). Referencing Zone TA-16, it consists of different
      landmarks, such as Sacred & Religious Sites, Museums, Monuments & Status,
      Historic Walking Areas and Historic Sites. Mid-range restaurant takes the
      most proportion of Zone TA-2 and Zone TA-9. However, a comparison of the
      two zones reveals that Zone TA-2 has more types of hotels, while Zone TA-9
      has a more diverse range of restaurants based on cuisine types. Notably,
      the formation of Zone TA-15 are mostly based on Seafood, Singaporean
      cuisine restaurant, Street food and Barbecue.
    </p>
  </div>
);

export const CONTENT_PERCEPTION_ZONE = (
  <div>
    <p>
      This map shows the spatial distribution of perceptional thematic zones.
      IG-20 (Morning) and IG-21 (Study) take the largest portion of region.
      IG-21 tends to form clustering, while IG-20 is more dispersed from each
      other. Both IG-10 (Family events) and IG-11(Local food) take significant
      portion of regions, while IG-11 shows relative higher density in the
      eastern Singapore. IG-28 (Business) shows only few spots and the central
      area has a higher possibility.
    </p>
    <p>
      By looking at the vocabulary, IG-1 (Malay) is dominants by Malay
      language-related keywords, such as selamat , kasih , hidup and hati . IG-9
      (Lifestyle) and IG-17 (Leisure) are associated with objects. However, IG-9
      is about workshop, paint, color, beautiful and idea, IG-17 is related to
      nail, book, bird and baby. These two thematic zones reflect that people
      are involved into two different types of activities.
    </p>
    <p>
      Some thematic zones capturing “time”, but the meaning is varied. For
      instance, IG-20, IG-25, IG-23, IG-16 are respectively related to morning,
      brunch, lunch and dinner.
    </p>
    <p>
      In terms of “happy”, the nuances show the differentiation of zones in
      Figure 4. Most of thematic zones mentioned “love” and “time”. However,
      there are some nuances. IG-12 (Daily)is space-related with the words
      “east”, “west” and “bukit”. While, IG-10 (Family events) and IG-16
      (Dinner) are event-related such as “birthday” and “Christmas”. IG-29
      (Party) is about club and party, while IG-19 (Community) is about
      “community” and “dessert”.
    </p>
  </div>
);

export const CONTENT_UNIQUENESS = (
  <div>
    <p>
      Based on θ values and JS Divergence, the research introduces the concept
      of Uniqueness and Diversity index. Diversity compares the difference
      within the ROI, while uniqueness compares the difference crossing ROIs.
      The result shows they have negative correlation.
    </p>
    <p>
      This map shows the spatial distribution of Uniqueness and Diversity. The
      height of hexagon represents the value of uniqueness (click top left
      corner to 3D view). If the hexagon is more reddish, the hexagon has higher
      diversity. The most unique regions are not in the central areas. The most
      unique two regions are those near National stadium and Hougang stadium.
      Neighborhoods were supposed to be generic in Singapore. Surprisingly, some
      of neighborhoods are the unique regions such as Telok Blangah, Yio Chu
      Kang. Moreover, some regions are not as unique as people expected. For
      example, the Changi airport shows a relative lower uniqueness, especially
      the area near the Jewel, an entertainment and shopping complex inside the
      Changi airport. While, only Terminal 3 shows a relative high uniqueness.
    </p>
    <p>
      The Pearson correlation of Uniqueness and Diversity shows Uniqueness and
      overall Diversity have strongly negative correlation at -0.82. It implies
      that if a region becomes more unique in both functions and perceptions,
      the region tends to be dominant by certain types of functional and
      perceptional thematic zones.
    </p>
  </div>
);
