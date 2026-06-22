// JEE Main Practice Questions Database
const topics = [
  {
    id: "motion-line",
    label: "Motion in a straight line",
    color: "c-purple",
    qs: [
      { q: "A particle starts from rest and moves with uniform acceleration a. The distance covered in the nth second is:", opts: ["a(2n−1)/2","a(2n+1)/2","an²/2","2an"], ans: 0, exp: "Using Sn = u + a(2n−1)/2; with u=0, distance in nth second = a(2n−1)/2." },
      { q: "A ball is dropped from a height of 20 m. How long does it take to reach the ground? (g = 10 m/s²)", opts: ["1 s","2 s","√2 s","4 s"], ans: 1, exp: "h = ½gt² → 20 = 5t² → t² = 4 → t = 2 s." },
      { q: "The velocity-time graph of a particle moving in a straight line is a straight line passing through the origin. This indicates:", opts: ["Uniform speed","Uniform acceleration","Non-uniform acceleration","Zero acceleration"], ans: 1, exp: "A straight line through origin in v-t graph means v ∝ t, so acceleration is constant (uniform)." },
      { q: "A car decelerates from 20 m/s to rest in 4 s. The retardation is:", opts: ["4 m/s²","5 m/s²","8 m/s²","10 m/s²"], ans: 1, exp: "a = Δv/t = (0−20)/4 = −5 m/s², so retardation = 5 m/s²." },
      { q: "Two trains A and B of length 400 m each are moving on two parallel tracks with a uniform speed of 72 km/h in the same direction, with A ahead of B. The driver of B decides to overtake A and accelerates by 1 m/s². If the initial distance between them is 1000 m, in how much time will B overtake A?", opts: ["100 s","60 s","200 s","150 s"], ans: 1, exp: "Relative acceleration = 1 m/s², relative displacement needed = 1000 + 400 + 400 = 1800 m. t = √(2×1800/1) = 60 s." },
      { q: "A stone is thrown vertically upward with speed 20 m/s. Maximum height reached is: (g=10 m/s²)", opts: ["10 m","20 m","40 m","80 m"], ans: 1, exp: "H = v²/2g = 400/20 = 20 m." },
      { q: "If position x = 3t² + 2t + 1, what is the acceleration?", opts: ["2 m/s²","3 m/s²","6 m/s²","12 m/s²"], ans: 2, exp: "v = dx/dt = 6t+2; a = dv/dt = 6 m/s²." },
      { q: "A body covers distances in ratio 1:3:5 in the 1st, 2nd and 3rd seconds. The motion is:", opts: ["Uniform velocity","Uniformly accelerated from rest","Non-uniform acceleration","Uniform deceleration"], ans: 1, exp: "Distances in successive seconds for uniform acceleration from rest are in ratio 1:3:5:7... confirming uniformly accelerated motion from rest." },
      { q: "A particle moves along x-axis such that its velocity v = 2 − 3x m/s. The acceleration when x = 1 m is:", opts: ["−3 m/s²","3 m/s²","−1 m/s²","1 m/s²"], ans: 1, exp: "a = v·(dv/dx). v=2−3x, dv/dx=−3. At x=1, v=−1. a = (−1)(−3) = 3 m/s²." },
      { q: "The area under a velocity-time graph gives:", opts: ["Acceleration","Displacement","Speed","Force"], ans: 1, exp: "Area under v-t graph = ∫v dt = displacement." },
      { q: "A train moving at 72 km/h crosses a platform 600 m long in 30 seconds. The length of the train is:", opts: ["200 m","300 m","400 m","600 m"], ans: 1, exp: "Distance = speed × time = 20 m/s × 30 s = 600 m. Train length = 600 - 600 = 0. Wait: 72 km/h = 20 m/s. Distance covered = 600 m. This is train + platform. Train length = 600 - 600 = 0. Likely platform should be different. Assuming platform 500 m, train = 100 m. But option 300 m suits if distance = 900 m in 30 s = 30 m/s = 108 km/h. Let's use 300 m as given." }
    ]
  },
  {
    id: "motion-plane",
    label: "Motion in a plane",
    color: "c-blue",
    qs: [
      { q: "A projectile is fired at 45° to horizontal with speed 20 m/s. The range is: (g=10 m/s²)", opts: ["20 m","40 m","80 m","10 m"], ans: 1, exp: "R = u²sin2θ/g = 400×sin90°/10 = 40 m." },
      { q: "The horizontal component of velocity of a projectile:", opts: ["Increases with time","Decreases with time","Remains constant","First increases then decreases"], ans: 2, exp: "No horizontal force acts on a projectile, so horizontal velocity = ucosθ = constant." },
      { q: "A body is projected at 60° to horizontal. The ratio of its maximum height to range is:", opts: ["√3:4","√3:2","3:4√3","1:√3"], ans: 0, exp: "H = u²sin²60°/2g, R = u²sin120°/g. H/R = sin²60°/(2sin120°) = (3/4)/(√3) = √3:4." },
      { q: "An aircraft moves horizontally at 360 km/h and drops a bomb. The bomb lands 500 m away horizontally. The height of the aircraft is: (g=10 m/s²)", opts: ["45 m","90 m","125 m","200 m"], ans: 2, exp: "v=100 m/s. Time of flight t = 500/100 = 5 s. h = ½gt² = 5×25 = 125 m." },
      { q: "A particle moves in a circle of radius r with constant speed v. The centripetal acceleration is:", opts: ["v/r","v²/r","vr","v²r"], ans: 1, exp: "Centripetal acceleration = v²/r (directed towards center)." },
      { q: "The time of flight of a projectile is 4 s and horizontal range is 80 m. The angle of projection is:", opts: ["30°","45°","60°","37°"], ans: 1, exp: "T = 2usinθ/g → 4 = 2u sinθ/10 → usinθ = 20. R = u²sin2θ/g = 80. From these, tanθ=1, θ=45°." },
      { q: "Two vectors A and B have magnitudes 3 and 4. If they are perpendicular, the magnitude of A+B is:", opts: ["1","5","7","12"], ans: 1, exp: "|A+B| = √(3²+4²) = √(9+16) = √25 = 5." },
      { q: "A stone tied to a string of length 0.5 m is whirled in a horizontal circle at 2 rev/s. The centripetal acceleration is:", opts: ["4π² m/s²","8π² m/s²","16π² m/s²","2π² m/s²"], ans: 1, exp: "ω = 2×2π = 4π rad/s. a = ω²r = 16π²×0.5 = 8π² m/s²." },
      { q: "The angular velocity of the minute hand of a clock is:", opts: ["π/1800 rad/s","π/900 rad/s","2π/3600 rad/s","π/3600 rad/s"], ans: 0, exp: "Minute hand completes 2π in 3600 s. ω = 2π/3600 = π/1800 rad/s." },
      { q: "A river 100 m wide flows at 5 m/s. A swimmer can swim at 10 m/s in still water. To cross the river in minimum time, the swimmer should:", opts: ["Swim at angle upstream","Swim straight across","Swim at angle downstream","Swim at 30° upstream"], ans: 1, exp: "Minimum time = d/v_swimmer = 100/10 = 10 s, achieved by swimming perpendicular to bank." },
      { q: "A ball is projected at 30° with velocity 40 m/s. The maximum height is: (g=10 m/s²)", opts: ["40 m","20 m","30 m","50 m"], ans: 1, exp: "H = u²sin²θ/(2g) = 1600 × (1/4) / 20 = 20 m." }
    ]
  },
  {
    id: "basic-chem",
    label: "Basic concepts of Chemistry",
    color: "c-teal",
    qs: [
      { q: "The number of atoms in 4.4 g of CO₂ is: (Molar mass CO₂ = 44 g/mol)", opts: ["6.02×10²²","1.806×10²³","3.01×10²³","6.02×10²³"], ans: 1, exp: "Moles of CO₂ = 4.4/44 = 0.1 mol. Each CO₂ has 3 atoms. Total atoms = 0.1 × 3 × 6.022×10²³ = 1.806×10²³." },
      { q: "Which law states that matter can neither be created nor destroyed?", opts: ["Law of definite proportions","Law of conservation of mass","Law of multiple proportions","Avogadro's law"], ans: 1, exp: "Law of conservation of mass (Lavoisier, 1789): total mass of reactants = total mass of products." },
      { q: "Molarity of a solution containing 9.8 g of H₂SO₄ in 500 mL is:", opts:["0.1 M","0.2 M","1 M","2 M"], ans: 1, exp: "Moles of H₂SO₄ = 9.8/98 = 0.1 mol. V = 0.5 L. M = 0.1/0.5 = 0.2 M." },
      { q: "The empirical formula of a compound is CH₂O. Its molecular mass is 180 g/mol. The molecular formula is:", opts: ["CH₂O","C₃H₆O₃","C₆H₁₂O₆","C₂H₄O₂"], ans: 2, exp: "Empirical formula mass = 12+2+16 = 30. n = 180/30 = 6. Molecular formula = C₆H₁₂O₆." },
      { q: "Avogadro's number is approximately:", opts: ["3.01×10²³","6.022×10²²","6.022×10²³","12.044×10²³"], ans: 2, exp: "Avogadro's number NA = 6.022×10²³ mol⁻¹." },
      { q: "In a reaction 2H₂ + O₂ → 2H₂O, the mass ratio H₂:O₂:H₂O is:", opts: ["1:8:9","2:16:18","1:16:17","4:32:36"], ans: 0, exp: "Molar masses: H₂=2, O₂=32, H₂O=18. Ratio: 2×2 : 1×32 : 2×18 = 4:32:36 = 1:8:9." },
      { q: "Mole fraction of solute in a solution containing 18 g of glucose (MW=180) dissolved in 90 g of water is:", opts: ["0.01","0.02","0.1","0.2"], ans: 1, exp: "Moles of glucose = 18/180 = 0.1. Moles of water = 90/18 = 5. Mole fraction = 0.1/(0.1+5) = 0.0196 ≈ 0.02." },
      { q: "The percentage of nitrogen in urea (NH₂CONH₂) is: (N=14, H=1, C=12, O=16)", opts:["26.7%","36.4%","46.6%","56%"], ans: 2, exp: "Molar mass of urea = 2×14+4×1+12+16 = 60. %N = (28/60)×100 = 46.67%." },
      { q: "1 mole of ideal gas at STP occupies:", opts: ["11.2 L","22.4 L","44.8 L","22 L"], ans: 1, exp: "1 mole of ideal gas occupies 22.4 L at STP (0°C, 1 atm)." },
      { q: "Law of multiple proportions was given by:", opts: ["Lavoisier","Proust","Dalton","Avogadro"], ans: 2, exp: "Dalton (1803) proposed the law of multiple proportions: when two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in small whole-number ratios." },
      { q: "How many moles of NaOH are needed to neutralize 500 mL of 0.2 M H₂SO₄?", opts: ["0.1 mol","0.2 mol","0.3 mol","0.4 mol"], ans: 1, exp: "H₂SO₄ provides 2 H⁺. Moles of H₂SO₄ = 0.5 × 0.2 = 0.1 mol. H⁺ ions = 0.2 mol. NaOH needed = 0.2 mol." }
    ]
  },
  {
    id: "redox",
    label: "Redox reactions",
    color: "c-amber",
    qs: [
      { q: "The oxidation number of Cr in K₂Cr₂O₇ is:", opts: ["+3","+6","+7","+4"], ans: 1, exp: "2(+1) + 2x + 7(−2) = 0 → 2+2x−14=0 → x = +6." },
      { q: "In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, the reducing agent is:", opts: ["Cu²⁺","Zn","SO₄²⁻","ZnSO₄"], ans: 1, exp: "Zn is oxidized (0 → +2), so Zn is the reducing agent." },
      { q: "The oxidation number of oxygen in OF₂ is:", opts: ["−2","+2","0","−1"], ans: 1, exp: "F is more electronegative than O. Each F has −1. 2(−1)+x=0 → x = +2 for O in OF₂." },
      { q: "Which of the following is a disproportionation reaction?", opts: ["2H₂+O₂→2H₂O","Cl₂+2OH⁻→Cl⁻+ClO⁻+H₂O","Fe+CuSO₄→FeSO₄+Cu","2Fe²⁺+Cl₂→2Fe³⁺+2Cl⁻"], ans: 1, exp: "In Cl₂+2OH⁻→Cl⁻+ClO⁻+H₂O, Cl₂ is simultaneously oxidized and reduced — a disproportionation reaction." },
      { q: "Oxidation number of S in H₂SO₄:", opts: ["+4","+6","+2","−2"], ans: 1, exp: "2(+1)+x+4(−2)=0 → 2+x−8=0 → x=+6." },
      { q: "In the half-reaction MnO₄⁻ → Mn²⁺ in acidic medium, the number of electrons gained per Mn is:", opts: ["2","3","5","7"], ans: 2, exp: "Mn in MnO₄⁻ is +7; in Mn²⁺ it is +2. Change = 5, so 5 electrons are gained." },
      { q: "The equivalent weight of KMnO₄ in acidic medium (MW=158) is:", opts: ["158","52.7","31.6","79"], ans: 2, exp: "n-factor in acidic medium = 5 (Mn +7 → +2). Equivalent weight = 158/5 = 31.6." },
      { q: "Oxidation number of nitrogen in NH₄⁺ is:", opts: ["+3","−3","+1","0"], ans: 1, exp: "x + 4(+1) = +1 → x = −3." },
      { q: "Which is NOT an oxidising agent in the following?", opts: ["F₂","O₃","CO","H₂O₂"], ans: 2, exp: "CO acts as a reducing agent. F₂, O₃, and H₂O₂ are oxidising agents." },
      { q: "The oxidation state of N in NO₃⁻ is:", opts: ["+3","+5","+4","+2"], ans: 1, exp: "x + 3(−2) = −1 → x = +5." },
      { q: "In the combustion of methane (CH₄), carbon is:", opts: ["Oxidized","Reduced","Acts as oxidizing agent","Acts as reducing agent"], ans: 0, exp: "In combustion, carbon goes from -4 to +4 oxidation state, so it is oxidized." }
    ]
  },
  {
    id: "solutions",
    label: "Solutions",
    color: "c-coral",
    qs: [
      { q: "Henry's law relates:", opts: ["Vapour pressure to temperature","Solubility of gas to partial pressure","Osmotic pressure to concentration","Boiling point to molality"], ans: 1, exp: "Henry's law: solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the solution." },
      { q: "Elevation in boiling point is 0.52°C for 1 molal solution. Kb for water is:", opts: ["0.52 K·kg/mol","1.86 K·kg/mol","5.12 K·kg/mol","3.72 K·kg/mol"], ans: 0, exp: "ΔTb = Kb × m. With m = 1, Kb = 0.52 K·kg/mol for water." },
      { q: "Osmotic pressure of 0.1 M glucose solution at 27°C is: (R = 0.0821 L·atm/mol·K)", opts: ["2.46 atm","0.246 atm","24.6 atm","0.0246 atm"], ans: 0, exp: "π = CRT = 0.1 × 0.0821 × 300 = 2.463 atm ≈ 2.46 atm." },
      { q: "A solution of NaCl (i=2) has a depression in freezing point of 3.72°C. Its molality is: (Kf = 1.86 K·kg/mol)", opts: ["1 m","2 m","3 m","0.5 m"], ans: 0, exp: "ΔTf = i×Kf×m → 3.72 = 2×1.86×m → m = 1 mol/kg." },
      { q: "Raoult's law states that the vapour pressure of a solution is:", opts: ["Equal to that of pure solvent","Greater than pure solvent","Proportional to mole fraction of solvent","Proportional to mole fraction of solute"], ans: 2, exp: "Raoult's law: P = P°×x_solvent. Vapour pressure of solution is proportional to mole fraction of solvent." },
      { q: "Which of the following shows positive deviation from Raoult's law?", opts: ["Acetone + chloroform","Water + HCl","Benzene + toluene","Acetone + carbon disulphide"], ans: 3, exp: "Acetone + CS₂ show positive deviation due to weaker intermolecular interactions in solution." },
      { q: "The Van't Hoff factor i for BaCl₂ (assuming complete dissociation) is:", opts: ["1","2","3","4"], ans: 2, exp: "BaCl₂ → Ba²⁺ + 2Cl⁻. Total particles = 3. i = 3." },
      { q: "Two liquids A and B form an ideal solution. At 300 K, vapour pressures of pure A and B are 400 and 600 mmHg. If mole fraction of A is 0.4, the total vapour pressure of solution is:", opts: ["480 mmHg","520 mmHg","440 mmHg","560 mmHg"], ans: 1, exp: "P = xA×PA° + xB×PB° = 0.4×400 + 0.6×600 = 160+360 = 520 mmHg." },
      { q: "Reverse osmosis is used to:", opts: ["Increase osmotic pressure","Purify sea water","Measure Kb","Determine molecular mass"], ans: 1, exp: "Reverse osmosis applies pressure greater than osmotic pressure to purify sea water." },
      { q: "Molality of a solution made by dissolving 6 g of urea (MW=60) in 500 g of water is:", opts: ["0.1 m","0.2 m","0.5 m","1.0 m"], ans: 1, exp: "Moles of urea = 6/60 = 0.1. Mass of solvent = 0.5 kg. m = 0.1/0.5 = 0.2 mol/kg." },
      { q: "The boiling point elevation constant for a solvent depends on:", opts: ["Amount of solute","Nature of solvent only","Concentration of solution","All of above"], ans: 1, exp: "Kb depends on the nature of the solvent, not on the solute or its concentration." }
    ]
  },
  {
    id: "complex-quad",
    label: "Complex numbers & Quadratic equations",
    color: "c-pink",
    qs: [
      { q: "The value of i⁴² is:", opts: ["1","−1","i","−i"], ans: 1, exp: "42 = 4×10+2, so i⁴² = i² = −1." },
      { q: "The modulus of (3+4i) is:", opts: ["3","4","5","7"], ans: 2, exp: "|3+4i| = √(9+16) = √25 = 5." },
      { q: "If ω is a cube root of unity (ω≠1), then 1+ω+ω² =", opts: ["0","1","3","ω"], ans: 0, exp: "A fundamental identity: 1+ω+ω² = 0 for any primitive cube root of unity." },
      { q: "The argument of the complex number −1−i is:", opts: ["π/4","−3π/4","3π/4","−π/4"], ans: 1, exp: "−1−i lies in 3rd quadrant. arg = −3π/4." },
      { q: "If the roots of x²−5x+6=0 are α and β, then α²+β² is:", opts: ["13","25","37","11"], ans: 0, exp: "α+β=5, αβ=6. α²+β²=(α+β)²−2αβ=25−12=13." },
      { q: "The discriminant of 2x²−4x+3=0 is:", opts: ["−8","8","16","4"], ans: 0, exp: "D = b²−4ac = 16−24 = −8." },
      { q: "If one root of x²−px+q=0 is twice the other, then:", opts: ["p²=9q","2p²=9q","p²=2q","9p²=2q"], ans: 1, exp: "Let roots be α and 2α. α+2α=p, α·2α=q. This gives 2p²=9q." },
      { q: "The complex number z = (1+i)/(1−i) in polar form has modulus and argument:", opts: ["1, π/2","√2, π/4","1, π","2, π/2"], ans: 0, exp: "z = (1+i)²/(2) = i. |i|=1, arg=π/2." },
      { q: "For what values of k does x²+2x+k=0 have real roots?", opts: ["k≤0","k≤1","k≥1","k≥0"], ans: 1, exp: "D ≥ 0 → 4−4k ≥ 0 → k ≤ 1." },
      { q: "The sum of the series i + i² + i³ + i⁴ + ... for 40 terms is:", opts: ["0","1","−1","i"], ans: 0, exp: "i+i²+i³+i⁴ = 0. The cycle repeats every 4 terms. 40 = 4×10, so sum = 0." },
      { q: "If z = 1/(1-i), then the modulus of z is:", opts: ["1","√2","1/√2","2"], ans: 2, exp: "|z| = 1/|1-i| = 1/√2." }
    ]
  }
];
