export type Note = {
  no: string;
  title: string;
  line: string;
  photo: string;
  date: string;
  tone: string;
};

const tones = ['#CDC9BF', '#BEB8AB', '#D6D2C8', '#C4BEB1'];

const raw: [string, string, string, string][] = [
  ['Before you go', 'List what you’re leaving and what you’re going toward. Only the second list fits in a suitcase.', 'notebook on a kitchen table', '03 14 ’26'],
  ['Documents', 'Scan everything, keep it in two places — then stop checking it every night.', 'folder of papers, flash', '04 02 ’26'],
  ['Language', 'Twenty minutes a day beats a weekend of panic before an appointment.', 'sticky notes with words', '04 19 ’26'],
  ['Money', 'Count months, not hopes. Know your runway before you book the ticket.', 'coins on a windowsill', '05 01 ’26'],
  ['The first month', 'Feeling lost is part of the job description, not proof you failed.', 'street at night, blurred', '05 22 ’26'],
  ['Home', 'Buy one thing that makes the rented room yours.', 'mug on a bare shelf', '06 08 ’26'],
  ['People', 'Say yes to the slightly boring meetup. Friendships start there.', 'two hands, two cups', '06 30 ’26'],
  ['Back home', 'Call because you want to, not because you feel guilty.', 'phone screen, video call', '07 12 ’26'],
  ['Doomscrolling', 'Mute the forums after 9 p.m. The rules won’t change overnight.', 'phone face down on bed', '07 27 ’26'],
  ['Bad days', 'Homesickness comes in waves. Let it pass; don’t make big decisions inside it.', 'rain on a bus window', '08 15 ’26'],
  ['Routine', 'Your café, your gym, your Sunday walk — that’s where “here” begins.', 'sneakers by the door', '09 03 ’26'],
  ['Now', 'The life you’re building doesn’t start after the move. It started this morning.', 'morning light, open window', '10 07 ’26'],
];

export const notes: Note[] = raw.map(([title, line, photo, date], i) => ({
  no: String(i + 1).padStart(2, '0'),
  title,
  line,
  photo: photo,
  date,
  tone: tones[i % tones.length],
}));
